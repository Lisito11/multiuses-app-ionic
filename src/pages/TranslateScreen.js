import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton } from '@ionic/react';
import './Translate.css';
import { TranslateContainer } from './../components/TranslateContainer';

export const TranslateScreen  = () => {
    return (
        <>
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonMenuButton color='primary' menu='first' slot='start'/>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Translate</IonTitle>
            </IonToolbar>
          </IonHeader>
          <TranslateContainer/>
        </IonContent>
      </IonPage>
        </>
    )
}
