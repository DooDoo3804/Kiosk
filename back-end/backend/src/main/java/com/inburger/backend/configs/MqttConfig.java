//package com.inburger.backend.configs;
//
//import org.eclipse.paho.client.mqttv3.IMqttClient;
//import org.eclipse.paho.client.mqttv3.MqttAsyncClient;
//import org.eclipse.paho.client.mqttv3.MqttClient;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.integration.annotation.ServiceActivator;
//import org.springframework.integration.channel.DirectChannel;
//import org.springframework.integration.core.MessageProducer;
//import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter;
//import org.springframework.integration.mqtt.support.DefaultPahoMessageConverter;
//import org.springframework.integration.mqtt.support.MqttHeaders;
//import org.springframework.messaging.MessageChannel;
//import org.springframework.messaging.MessageHandler;
//
//import java.util.UUID;
//import java.util.concurrent.CountDownLatch;
//import java.util.concurrent.TimeUnit;
//
//
//@Configuration
//public class MqttConfig {
//
//    private static final String BROKER_URL = "tcp://3.36.49.220:1883";
//    private static final String MQTT_CLIENT_ID = MqttAsyncClient.generateClientId();
//    private static final String TOPIC_FILTER = "common";
//
//    @Bean
//    public MessageChannel mqttInputChannel() {
//        return new DirectChannel();
//    }
//
//    @Bean
//    public MessageProducer inboundChannel() {
//        MqttPahoMessageDrivenChannelAdapter adapter =
//                new MqttPahoMessageDrivenChannelAdapter(BROKER_URL, MQTT_CLIENT_ID, TOPIC_FILTER);
//        adapter.setCompletionTimeout(5000);
//        adapter.setConverter(new DefaultPahoMessageConverter());
//        adapter.setQos(1);
//        adapter.setOutputChannel(mqttInputChannel());
//        return adapter;
//    }
//
//    @Bean
//    @ServiceActivator(inputChannel = "mqttInputChannel")
//    public MessageHandler inboundMessageHandler() {
//        return message -> {
//            String topic = (String) message.getHeaders().get(MqttHeaders.RECEIVED_TOPIC);
//            System.out.println("Topic:" + topic);
//            System.out.println("Payload" + message.getPayload());
//        };
//    }
////    CountDownLatch receivedSignal = new CountDownLatch(10);
////    subscriber.subscribe(EngineTemperatureSensor.TOPIC, (topic, msg) -> {
////            byte[] payload = msg.getPayload();
////            // ... payload handling omitted
////            receivedSignal.countDown();
////        });
////    receivedSignal.await(1, TimeUnit.MINUTES);
//}


package  com.inburger.backend.configs;


// subsccriber는 broker에 먼저 구독신청읗 해야한다.
// 구독신청한 topic으로 publisher가 메세지를 broker에 보내면 broker가 다시 subscriber로 전달해준다.

import org.eclipse.paho.client.mqttv3.*;

//Mqtt 클라이언트 작성- broker에 메세지를 전달받기 위해 구독신청을 하고 대기하는 객체
// 1. MqttCallback 인터페이스를 상속
// 2. Mqttcallback 인터페이스의 abstract메소드를 오버라이딩
// 이벤트가 발생하면서 메소드를 호출시키려면 리스너를 상속받아야함
public class MyMqtt_Sub_Client implements MqttCallback{
    //broker와 통신하는 역할 - subscriber, publisher의 역할
    private MqttClient mqttClient;
    //Mqtt프로토콜를 이용해서 broker에 연결하면서 연결정보를 설정할 수 있는 객체
    private MqttConnectOptions mqttOptions;

    //clientId는 broker가 클라이언트를 식별하기 위한 문자열 - 고유
    public MyMqtt_Sub_Client init(String server, String clientId){
        try {
            mqttOptions = new MqttConnectOptions();
            mqttOptions.setCleanSession(true);
            mqttOptions.setKeepAliveInterval(30);
            //broker의 subscriber하기위한 클라이언트 객체 생성
            mqttClient = new MqttClient(server, clientId);
            //클라이언트 객체에 Mqttcallback을 등록- 구독신청 후 적절한 시점에 처리하고 싶은 기능을 구현하고
            // 메소드가 자동으로 그 시점에 호출되도록 할 수 있다.
            mqttClient.setCallback(this);
            mqttClient.connect(mqttOptions);
        } catch (MqttException e) {
            e.printStackTrace();
        }
        return this;
    }

    //커넥션이 종료되면 호출 - 통신오류로 연결이 끊어지는 경우 호출
    @Override
    public void connectionLost(Throwable throwable) {

    }


    //메세지가 도착하면 호출되는 메소드드
    @Override
    public void deliveryComplete(IMqttDeliveryToken iMqttDeliveryToken) {

    }

    //메세지의 배달이 완료되면 호출
    @Override
    public void messageArrived(String topic, MqttMessage message) throws Exception {
        System.out.println("=====================메세지 도착=================");
        System.out.println(message);
        System.out.println("topic: " +topic +",id: "+ message.getId() + ",payload: " + new String(message.getPayload()));
    }

    //구독신청
    public boolean subscriber(String topic){
        boolean result = true ;
        try {
            if(topic!=null){
                //topic과 Qos를 전달
                //Qos는 메세지가 도착하기 위한 품질에 값을 설정 - 서비스 품질
                //0,1,2를 설정할 수 있음
                mqttClient.subscribe(topic, 0);
            }
        } catch (MqttException e) {
            e.printStackTrace();
            result = false;
        }
        return result;
    }

    public static void main(String[] args) {
        MyMqtt_Sub_Client subobj = new MyMqtt_Sub_Client();
        //broker 서버 호출
        subobj.init("tcp://ip:1883","myid2").subscriber("iot"); // clientId는 중복되면 안됨
    }
}