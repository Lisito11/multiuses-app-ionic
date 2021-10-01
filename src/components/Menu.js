import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/react";
import { menuController } from "@ionic/core";

export const Menu = () => {

  const closeMenu = () => menuController.close();
  
  return (
    <>
      <IonMenu side="start" menuId="first" contentId="mainRouter">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="home" onClick={closeMenu}>
              Inicio
            </IonItem>
            <IonItem routerLink="sum" onClick={closeMenu}>
              Sumadora
            </IonItem>
            <IonItem routerLink="translate" onClick={closeMenu}>
              Traductor
            </IonItem>
            <IonItem routerLink="table" onClick={closeMenu}>
              Tabla de multiplicar
            </IonItem>
            <IonItem routerLink="video" onClick={closeMenu}>
              Video
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};
