import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";

export const NavButtons = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  // MediaQueryListEvent { isTrusted: true, media: "(min-width: 768px)", matches: true ...}
  console.log(mQuery.matches);

  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <IonMenuButton />
      ) : (
        <>
          <IonButton routerLink={"/home"}>Home </IonButton>
          <IonButton routerLink={"/Perros"}>Perros </IonButton>
          <IonButton routerLink={"/Gatos"}>Gatos</IonButton>
          <IonButton routerLink={"/Reptiles"}>Reptiles</IonButton>
          <IonButton routerLink={"/Roedores"}>Roedores</IonButton>
          <IonButton routerLink={"/Peces"}>Peces</IonButton>
          <IonButton routerLink={"/Contacto"}>Contacto</IonButton>
        </>
      )}
    </div>
  );
};