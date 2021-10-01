import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Sum.css';
import { SumContainer } from '../components/SumContainer';

export const SumScreen  = () => {
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonMenuButton color='primary' menu='first' slot='start'/>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Sum</IonTitle>
            </IonToolbar>
          </IonHeader>
          <SumContainer/>
        </IonContent>
      </IonPage>
    )
}
