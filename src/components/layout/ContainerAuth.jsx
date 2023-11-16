/* 1. rafce */
/* 3. llamamos a la propiedad children */
const ContainerAuth = ({ children }) => {
  return (
    /* 2. se copia los estilos de main */
    <main className="font-urbanist min-h-screen bg-purple-bg text-white grid justify-stretch justify-items-center items-center bg-[url(/images/bg-auth-mobile.png)] bg-right-bottom bg-no-repeat gap-14 p-4 sm:grid-cols-[auto_auto] sm:justify-center sm:bg-[url(/images/bg-auth-desktop.png)]">
      {/* 4. renderizamos a la propiedad children */}
      {children}
    </main>
  );
};
export default ContainerAuth;
