import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./ProductTable.css";
import { TableContainer } from "./../components/TableContainer";

export const ProductTableScreen = () => {
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton color="primary" menu="first" slot="start" />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TableContainer />
      </IonContent>
    </IonPage>
  );
};
