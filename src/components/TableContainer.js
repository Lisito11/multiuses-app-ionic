import React from "react";
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";
import { useState } from "react";
export const TableContainer = () => {
  const [number, setNumber] = useState();
  const [tabla, setTabla] = useState([]);

  const multiplicar = (num) => {
    setTabla([]);
    for (let i = 1; i <= 14; i++) {
      setTabla((tabla) => [...tabla, `${num} x ${i} = ${parseInt(num * i)}`]);
    }
    setNumber('');
  };
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Tabla de multiplicar</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Esta es una tabla de multiplicar de cualquier numero que se
          introduzca.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">Escribe un número</IonLabel>
            <IonInput
              type="text"
              name="number"
              value={number}
              onIonChange={(e) => setNumber(e.detail.value)}
            ></IonInput>
          </IonItem>
          <IonCol size="12">
          <IonButton expand="block" onClick={() => multiplicar(number)}>
              Multiplicar
            </IonButton>
              </IonCol>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Resultado</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {tabla.map((element) => (
              <IonItem>{element}</IonItem>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};
