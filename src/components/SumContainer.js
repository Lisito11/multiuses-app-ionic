import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow,
  IonContent,
  IonItemDivider,
  IonBadge,
} from "@ionic/react";
import { pin, walk, warning, wifi, wine } from "ionicons/icons";
import React, { useState } from "react";
import "../pages/Sum.css";
import { useForm } from './../hooks/useForm';
export const SumContainer = () => {
  const [number, setNumber] = useState('');
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();

  const sumar = () => {
    setNumber(parseInt(number1) + parseInt(number2))
    setNumber1('')
    setNumber2('')
  }
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Sumadora</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Esta es una calculadora que suma dos números. Por favor introduce dos
          números para sumarlos.
        </IonCardContent>

      </IonCard>
      <IonCard>
          <IonCardContent>
            
          <IonGrid>
            <IonRow>
              <IonCol size="12">
              <IonItem>
                  <IonLabel position="floating">Escribe el número 1</IonLabel>
                  <IonInput
                  type="number"
                  name='number1'
                  value={number1}
                  onIonChange={e => setNumber1(e.detail.value)}
                ></IonInput>
                </IonItem>
               
              </IonCol>
              <IonCol size="12">
              <IonItem>
                  <IonLabel position="floating">Escribe el número 2</IonLabel>
                  <IonInput
                  type="number"
                  name='number2'
                  value={number2}
                  onIonChange={e => setNumber2(e.detail.value)}
                ></IonInput>
                </IonItem>
                
              </IonCol>
              <IonCol size="12">
                <IonButton expand="block" onClick={sumar}>Sumar</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>


      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Resultado</IonCardTitle>
          <IonCardSubtitle>
            <IonBadge color="primary">{number}</IonBadge>
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>


    </>
  );
};
