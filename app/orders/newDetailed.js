import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Modal } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';

export default function MainMenu() {
    const router = useRouter();
    const ordersInfo = [
        { user: 'Diego D.', timeOrdered: '2025-01-02T09:50', items: 4 },
        { user: 'Shalem V.', timeOrdered: '2025-01-02T09:52', items: 3 },
        { user: 'Damian G.', timeOrdered: '2025-01-02T09:52', items: 2 },
        { user: 'Emilio V.', timeOrdered: '2025-01-02T09:55', items: 2 },
        { user: 'Andres D.', timeOrdered: '2025-01-02T09:57', items: 3 },
        { user: 'Uriel R.', timeOrdered: '2025-01-02T09:59', items: 1 },
        { user: 'Jesus T.', timeOrdered: '2025-01-02T10:00', items: 3 },
    ];

    const sortedOrders = [...ordersInfo].sort(
        (a, b) => new Date(a.timeOrdered) - new Date(b.timeOrdered)
    );
    const formatTime = (iso) => {
        const date = new Date(iso);
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    };

    const [orderMenuVisible, setOrderMenuVisible] = useState(false);

    const styles = StyleSheet.create({
        container: { 
            flex: 1, 
            backgroundColor: '#fff', 
            paddingHorizontal: 15, 
            paddingTop: 25, 
        },
        topBar: { 
            height: 140,
            justifyContent: 'space-between', 
            alignItems: 'center', 
            outlineColor: '#4caf50',
            outlineWidth: 3,
            marginBottom: 5,
            position: 'absolute', 
            top: 3, 
            left: 3, 
            right: 3, 
            flexDirection: 'row',  
        },
        title: { 
            fontSize: 36, 
            fontWeight: '700', 
            color: '#4caf50', 
            fontFamily: 'helvetica',
            paddingBottom: 10,
            paddingTop: 5,
        },
        newText: { 
            fontSize: 16, 
            fontWeight: '700',
            color: '#ff9800',
            fontFamily: 'helvetica',
        },
        buttonNew: { 
            height: 40,
            width: 85,
            outlineColor: '#ff9800',
            outlineWidth: 2,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginInline: 5,
        },
        container1: { 
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'list',  
        },
        container2: { 
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'list',  
        },
        iconGroup: { 
            flexDirection: 'row', 
            gap: 15,
            position: 'absolute',
            top: 10,
        },
        iconGroup1: { 
            flexDirection: 'row', 
            gap: 15,
            justifyContent: 'center',
            position: 'absolute',
            left: 10,
        },
        iconGroup2: { 
            flexDirection: 'row', 
            gap: 15,
            justifyContent: 'center',
            position: 'absolute',
            right: -400,
        },
        buttonNew_selected: { 
            height: 40,
            width: 85,
            backgroundColor: '#ff9800',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginInline: 5,
        },
        buttonNew_selected_text: { 
            color: '#000', 
            fontWeight: '700',
            fontFamily: 'helvetica',
        },
        buttonCooking: { 
            height: 40,
            width: 85,
            outlineColor: '#fce819',
            outlineWidth: 2,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginInline: 5,
        },
        buttonCooking_text: { 
            color: '#fce819', 
            fontWeight: '700',
            fontFamily: 'helvetica',
        },
        buttonReady: { 
            height: 40,
            width: 85,
            outlineColor: '#83fc18',
            outlineWidth: 2,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginInline: 5,
        },
        buttonReady_text: { 
            color: '#83fc18', 
            fontWeight: '700',
            fontFamily: 'helvetica',
        },
        buttonDelivered: { 
            height: 40,
            width: 85,
            outlineColor: '#4caf50',
            outlineWidth: 2,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginInline: 5,
        },
        buttonDelivered_text: { 
            color: '#4caf50', 
            fontWeight: '700',
            fontFamily: 'helvetica',
        },
        orderContainer: { 
            width: '100%',
            height: 70,
            borderColor: '#4caf50',
            borderWidth: 2,
            marginVertical: 10,
            borderRadius: 15,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        toggleContainer: { 
            flexDirection: 'row', 
            justifyContent: 'space-evenly', 
            marginVertical: 5 
        },
        bottomNav: { 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            backgroundColor: '#fff', 
            flexDirection: 'row', 
            justifyContent: 'space-evenly', 
            alignItems: 'center', 
            height: 60, 
            borderTopWidth: 0.5, 
            borderColor: '#ff9800',
            borderWidth: 3,
            borderRadius: 15,
            borderBottomLeftRadius:40,
            borderBottomRightRadius:40,
            borderTopWidth: 3,
            marginBottom: 0.5,
        },
        bottomNavImg: { 
            width: 32, 
            height: 32,
        },
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.35)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        popup: {
            backgroundColor: '#fff',
            borderRadius: 15,
            width: 220,
            height: 260,
            paddingVertical: 10,
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
        popupOption: {
            paddingVertical: 14,
            paddingHorizontal: 20,
        },
    });

  return (
    <View style={styles.container}>
        <View style={styles.topBar}>

            <View style={styles.iconGroup}>

                <View style={styles.iconGroup1}>
                    <TouchableOpacity onPress={() => router.push('/orders/newPreview')}>
                        <Ionicons name="exit-outline" size={24} color="black" style={styles.icon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.iconGroup2}>
                    <TouchableOpacity onPress={() => router.push('/notifications')}>
                        <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/cart')}>
                        <Ionicons name="menu-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'column', position: 'absolute', left: 120}}>
                <View style={styles.container1}>
                    <Text style={styles.title}>PEDIDOS</Text>
                </View>

                <View style={styles.container2}>
                    <View style={styles.buttonNew}>
                        <Text style={styles.newText}>NEW</Text>
                    </View>
                </View>
            </View>
        </View>
      
        <Modal transparent animationType="fade" visible={orderMenuVisible} onRequestClose={() => setOrderMenuVisible(false)} >
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={() => setOrderMenuVisible(false)}>
                <View style={styles.popup}>
                    <TouchableOpacity style={styles.buttonNew_selected} onPress={() => { setOrderMenuVisible(false); router.push('/orders/newPreview');}}>
                        <Text style={styles.buttonNew_selected_text}>New</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonCooking} onPress={() => { setOrderMenuVisible(false); router.push('/orders/cookingPreview');}}>
                        <Text style={styles.buttonCooking_text}>Cooking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonReady} onPress={() => { setOrderMenuVisible(false); router.push('/orders/readyPreview'); }} >
                        <Text style={styles.buttonReady_text}>Ready</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonDelivered} onPress={() => { setOrderMenuVisible(false); router.push('/orders/deliveredPreview'); }} >
                        <Text style={styles.buttonDelivered_text}>Delivered</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>

        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={() => router.push('/orders/newPreview')} onLongPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); setOrderMenuVisible(true);}} delayLongPress={300}>
                <Ionicons name="receipt-outline" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/storeMenu')}>
                <Ionicons name="storefront-outline" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../../Media/UniBite_Logo_CC1.png')} style={styles.bottomNavImg} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/orders')}>
                <Ionicons name="pricetag-outline" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/profile')}>
                <Ionicons name="chatbubble-ellipses-outline" size={26} color="black" />
            </TouchableOpacity>
        </View>
    </View>
  );
}