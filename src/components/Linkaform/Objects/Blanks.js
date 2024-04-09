import React from 'react'
import { DoubleSidedImage } from 'components/shared'


const BlankView = () => {
    return (
        <>
            <div className="text-center">
                <DoubleSidedImage
                    className="mx-auto mb-8"
                    src="/img/others/welcome.png"
                    darkModeSrc="/img/others/welcome-dark.png"
                    alt="Welcome"
                />
                <h3 className="mb-2">
                    Bienvenido a servido
                </h3>
                <p className="text-base">
                    Seleccione los filtros del reporte para mostrar la información
                </p>
            </div>
        </>
    )
  }
  
  export default BlankView