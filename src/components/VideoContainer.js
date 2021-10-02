import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/react'
import { logoYoutube } from 'ionicons/icons'
import React from 'react'


export const VideoContainer = () => {

   
    return (
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>My experience about programing</IonCardSubtitle>
            <IonCardTitle>Lisanny Andrés Peña Guerrero</IonCardTitle>
            Ionic con react aun no permite la integracion de videos.
          </IonCardHeader>
           
          <IonCardContent>
          <IonItem  href="https://www.youtube.com/watch?v=T8PtztizSDQ" target='_blank'>
            <IonIcon icon={logoYoutube} slot="start" />
            <IonLabel>Video de youtube</IonLabel>
          </IonItem>
         
      </IonCardContent>
        </IonCard>
    )
}
