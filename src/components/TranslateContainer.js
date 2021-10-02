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
  IonBadge,
} from "@ionic/react";
import React, { useState } from "react";
import "../pages/Sum.css";

export const TranslateContainer = () => {
  const [number, setNumber] = useState("");
  const [numberTransform, setNumberTransform] = useState();

  const unidades = (num) => {

    switch(num)
    {
        case 1: return 'Uno';
        case 2: return 'Dos';
        case 3: return 'Tres';
        case 4: return 'Cuatro';
        case 5: return 'Cinco';
        case 6: return 'Seis';
        case 7: return 'Siete';
        case 8: return 'Ocho';
        case 9: return 'Nueve';
        default: return '';
    }

    
}

const decenasY = (strSin, numUnidades) => {
    if (numUnidades > 0)
    return `${strSin} y ${unidades(numUnidades).toLowerCase()}`
    return strSin;
}

const Decenas = (num) =>{

    const decena = Math.floor(num/10);
    const unidad = num - (decena * 10);

    switch(decena)
    {
        case 1:
            switch(unidad)
            {
                case 0: return 'Diez';
                case 1: return 'Once';
                case 2: return 'Doce';
                case 3: return 'Trece';
                case 4: return 'Catorce';
                case 5: return 'Quince';
                default: return 'Dieci' + unidades(unidad).toLowerCase();
            }
        case 2:
            switch(unidad)
            {
                case 0: return 'Veinte';
                default: return 'Veinti' + unidades(unidad).toLowerCase();
            }
        case 3: return decenasY('Treinta', unidad);
        case 4: return decenasY('Cuarenta', unidad);
        case 5: return decenasY('Cincuenta', unidad);
        case 6: return decenasY('Sesenta', unidad);
        case 7: return decenasY('Setenta', unidad);
        case 8: return decenasY('Ochenta', unidad);
        case 9: return decenasY('Noventa', unidad);
        case 0: return unidades(unidad);
        default: return 'ERROR';
    }
}

const centenas = (num) => {
    const centenas = Math.floor(num / 100);
    const decenas = num - (centenas * 100);

    switch(centenas)
    {
        case 1:
            if (decenas > 0)
                return 'ciento' + Decenas(decenas);
            return 'Cien';
        case 2: return 'Doscientos ' + Decenas(decenas).toLowerCase();
        case 3: return 'Trescientos ' + Decenas(decenas).toLowerCase();
        case 4: return 'Cuatrocientos ' + Decenas(decenas).toLowerCase();
        case 5: return 'Quinientos ' + Decenas(decenas).toLowerCase();
        case 6: return 'Seiscientos ' + Decenas(decenas).toLowerCase();
        case 7: return 'Setecientos ' + Decenas(decenas).toLowerCase();
        case 8: return 'Ochocientos ' + Decenas(decenas).toLowerCase();
        case 9: return 'Novecientos ' + Decenas(decenas).toLowerCase();
        default: Decenas(decenas);
    } 
}




  const transform = () => {
    const numberTrans = parseInt(number);
    
    if(numberTrans === 0){
        return setNumberTransform('Cero');
    }
    if(numberTrans === 1000){
        return setNumberTransform('Mil');
    }
    else if(numberTrans < 10){
        return setNumberTransform(unidades(numberTrans));
    }
    else if(numberTrans < 100){
        return setNumberTransform(Decenas(numberTrans));
    }
    else if(numberTrans < 1000){
        return setNumberTransform(centenas(numberTrans));
    }
    setNumber('');

  };
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Traductor de números</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Este es un traductor de números que convierte cualquier número del 1
          al 1000 en letras.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardContent>
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonItem>
                  <IonLabel position="floating">Escribe un número</IonLabel>
                  <IonInput
                    type="number"
                    name="number"
                    value={number}
                    onIonChange={(e) => setNumber(e.detail.value)}
                  ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol size="12">
                <IonButton expand="block" onClick={transform}>
                  Transformar
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Resultado</IonCardTitle>
          <IonCardSubtitle>
            <IonBadge color="primary">{numberTransform}</IonBadge>
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </>
  );
};
