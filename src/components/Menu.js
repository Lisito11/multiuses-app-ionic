import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';

export const Menu = () => (
  <>
    <IonMenu side="start" menuId="first" contentId="mainRouter">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menú</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink='home'>Inicio</IonItem>
          <IonItem routerLink='sum'>Sumadora</IonItem>
          <IonItem routerLink='translate'>Traductor</IonItem>
          <IonItem routerLink='table'>Tabla de multiplicar</IonItem>
          <IonItem routerLink='video'>Video</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  </>
);