import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { getAlarmas, deleteAlarmaById } from '../../services/alarmas';
import Swal from "sweetalert2";

const MainTableAlarms = () => {
    const [alarmas, setAlarmas] = useState([]);
    useEffect(() => {
        getAlarmas().then((rpta) => {
            setAlarmas(rpta);
        });
    }, []);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    const ocultarMesaById = (id) => {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Siguiente &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            {
                title: 'Estas seguro de eliminar esta alarma?',
                text: 'Nivel de tanque de aceite'
            },
            'Motivo',
            'Ingresa tu nombre'
        ]).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire({
                    title: '¿Estas seguro?',
                    text: "¡No se podrá revertir los cambios!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '¡Sí, eliminar!',
                    cancelButtonText: 'No, cancelar!',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        swalWithBootstrapButtons.fire(
                            '¡Hecho!',
                            'Se ha eliminado la alarma exitosamente',
                            'success'
                        )
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire(
                            '¡Cancelado',
                            'Has cancelado la operación',
                            'error'
                        )
                    }
                })
            }
        })
        // .then((rpta) => {
        //     if (rpta.value) {
        //         deleteAlarmaById(id);
        //     }
        // })
    }

    const infoAlarmaById = (id) => {
        alarmas.filter((id)=>{
            Swal.fire(
                'Valor fuera de rango Inferior',
                'Revisar qué tan inestable se encuentra en las últimas 24 horas',
                'question'
            )
        })
        
    }

    const datatable = {
        columns: [
            { label: "Ocultar", field: "ocultar" },
            { label: "Area", field: "area" },
            { label: "Sistema", field: "sistema" },
            { label: "Subsistema", field: "subsistema" },
            { label: "Variable Observada", field: "variableObservada" },
            { label: "Detalle", field: "detalle" },
            { label: "Mas detalle", field: "masDetalle" },
            { label: "Hora de Inicio", field: "hInicio" },
            { label: "Generar OM", field: "generarOM" },
        ],
        rows: alarmas.map((objAlarmas) => {
            return {
                ...objAlarmas,
                ocultar: (
                    <>
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => {
                                ocultarMesaById(objAlarmas.id);
                            }}
                        >
                            <i class="fas fa-minus-circle"></i>
                        </button>
                    </>
                ),
                masDetalle: (
                    <>
                        <button
                            className="btn btn-sm btn-outline-info"
                            onClick={() => {
                                infoAlarmaById(objAlarmas.id);
                            }}
                        >
                            <i class="fas fa-info-circle"></i>
                        </button>
                    </>
                ),
                generarOM: (
                    <>
                        <button className="btn btn-sm btn-outline-success">
                            <i class="fas fa-play-circle"></i>
                        </button>
                    </>
                ),
            }
        }),
    };




    return (
        <div>
            <div className="card card__table mx-auto">
                <div className="card-body ">
                    <div class="table-responsive-xl">
                        <MDBDataTableV5
                            hover
                            bordered
                            entriesOptions={[5, 20, 25]}
                            entries={5}
                            pagesAmount={4}
                            data={datatable}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTableAlarms
