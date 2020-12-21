import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { getAlarmas, deleteAlarmaById } from '../../services/alarmas';
import Swal from "sweetalert2";
import Cargando from '../../modules/admin/components/Cargando';

const MainTableAlarms = () => {
    const [alarmas, setAlarmas] = useState([]);
    const [loading, setLoading] = useState(true);

    const obtenerAlarmas = () => {
        getAlarmas().then((rpta) => {
            setAlarmas(rpta);
            setLoading(false);
        });
    };

    useEffect(() => {
        obtenerAlarmas();
    }, []);

  

    const ocultarMesaById = (id) => {

        Swal.fire({
            title: '¿Estas seguro?',
            text: "¡No podrás deshacer los cambios!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EB1651',
            cancelButtonColor: '#595856',
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: "Cancelar"
        }).then((rpta) => {
            if (rpta.value) {
                deleteAlarmaById(id).then((rpta) => {
                    Swal.fire(
                        {
                            title: '¡Eliminado!',
                            text: 'Alarma eliminada satisfactoriamente.',
                            icon: 'success',
                            timer: 1500,
                            //showConfirmButton:false,
                        }
                    );
                    obtenerAlarmas();

                });

            }

        })


    }

    const infoAlarmaById = (id) => {
        //alarmas.filter((id) => {
            Swal.fire(
                ` Valor fuera de rango Inferior`,
                'Revisar qué tan inestable se encuentra en las últimas 24 horas',
                'question'
            )
        //})

    }


    const generarOMbyId = (id) => {
        
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Siguiente &rarr;',
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            progressSteps: ['1', '2', '3']
          }).queue([
            {
              title: 'Generar Orden de Mantenimiento',
              text: 'Ingresa tu nombre'
            },
            'Ingresa el área a la que perteneces',
            '¿Cuál es la razón para generar la OM?'
          ]).then((result) => {
            if (result.value) {
              const answers = JSON.stringify(result.value)
              Swal.fire({
                title: '¿Estas seguro de generar la OM?',
                html: `
                  Tus respuestas son:
                  <pre><code>${answers}</code></pre>
                `,
                confirmButtonText: 'Generar OM',
                showCancelButton: true,
                cancelButtonText: "Cancelar"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    '¡Hecho!',
                    'Has generado exitosamente una orden de mantenimiento ',
                    'success'
                  )
                }
              })
                         
            }
          })
    };

    const datatable = {
        columns: [
            { label: "Eliminar", field: "ocultar" },
            { label: "Area", field: "area" },
            { label: "Sistema", field: "system" },
            { label: "Subsistema", field: "subsystem" },
            { label: "Variable Observada", field: "variable" },
            { label: "Valor", field: "value" },
            { label: "Mas detalle", field: "masDetalle" },
            { label: "Fecha y Hora de Inicio", field: "time" },
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
                            <i className="fas fa-minus-circle"></i>
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
                            <i className="fas fa-info-circle"></i>
                        </button>
                    </>
                ),
                generarOM: (
                    <>
                        <button className="btn btn-sm btn-outline-success"
                        onClick={() => {
                            generarOMbyId(objAlarmas.id);
                        }}
                        >
                            <i className="fas fa-play-circle"></i>
                        </button>
                    </>
                ),
            }
        }),
    };




    return (
        <div>
            <div className="card card__table mx-auto">
                <div className="card-header">
                    <h4 className="card-title text-center">Lista de variables con alarma</h4>
                    
                </div>
                <div className="card-body ">
                    <div className="table-responsive-lg">
                        {loading ? <Cargando text="Realizando consulta de variables con alarma activada" /> :
                            <MDBDataTableV5
                                searchLabel={"Buscar"}
                                infoLabel={['', '-', 'de', '']}
                                hover
                                bordered
                                entriesOptions={[5, 10, 20]}
                                entries={5}
                                pagesAmount={4}
                                data={datatable}
                                fullPagination

                                exportToCSV
                                //responsive
                                //responsiveSm
                                small
                                //scrollY
                            />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTableAlarms
