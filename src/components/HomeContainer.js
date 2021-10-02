import './ExploreContainer.css';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, IonThumbnail } from '@ionic/react'
import { logoFacebook, logoGithub, logoGoogle, logoInstagram, pin, sadOutline, walk, warning, wifi, wine } from 'ionicons/icons'
import React from 'react'

export const HomeContainer = () => {
  return (
    <div className='container-center'>
       <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Information</IonCardSubtitle>
            <IonCardTitle>Lisanny Andrés Peña Guerrero</IonCardTitle>
          </IonCardHeader>
           
          <IonCardContent>
            <img src="https://res.cloudinary.com/lisitor/image/upload/v1633110855/profile_ycppdn.jpg" alt='profile' width="200" height="240"/> 
      </IonCardContent>
        </IonCard>

        <IonCard>
         <IonItem  href="https://www.facebook.com/lisanny.andres" target='_blank'>
            <IonIcon icon={logoFacebook} slot="start" />
            <IonLabel>Lisanny A. Peña G.</IonLabel>
          </IonItem>

          <IonItem href="mailto:l.andrespg11@gmail.com" target='_blank' className="ion-activated">
            <IonIcon icon={logoGoogle} slot="start" />
            <IonLabel>l.andrespg11@gmail.com</IonLabel>
          </IonItem>

          <IonItem href="https://github.com/Lisito11" target='_blank'>
            <IonIcon icon={logoGithub} slot="start" />
            <IonLabel>Lisito11</IonLabel>
          </IonItem>

          <IonItem href="https://www.instagram.com/lisannypg/" target='_blank' className="ion-activated">
            <IonIcon icon={logoInstagram} slot="start" />
            <IonLabel>lisannypg</IonLabel>
          </IonItem>

          
        </IonCard>
        </div>
  );
};
