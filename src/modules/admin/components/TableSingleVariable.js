import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import Swal from "sweetalert2";
import { deleteAlarmaById } from '../../../services/alarmas';
import Cargando from './Cargando';

const TableSingleVariable = ({curva, loading, obtenerVariable, curvaAconsultar,setcurvaAconsultar}) => {
  


  const eliminarVariableById = (id) => {

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
                        timer: 2000,
                        //showConfirmButton:false,
                    }
                );
                console.log(`despues de eliminar, antes de ejecutar obtenerVariable: ${curvaAconsultar}`);
                obtenerVariable(`${curvaAconsultar}`);

            });

        }

    })


}


  const datatable = {
    columns: [
      { label: "Eliminar", field: "ocultar" },
      { label: "Variable Observada", field: "variable" },
      { label: "Valor", field: "value" },      
      { label: "Fecha y Hora de Inicio", field: "time" },
    ],
    rows: curva.map((objVariable) => {
      return {
        ...objVariable,
        ocultar: (
          <>
              <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => {
                    eliminarVariableById(objVariable.id);
                  }}
              >
                  <i className="fas fa-minus-circle"></i>
              </button>
          </>
      ),
      }
    }),
  };

  
  return (

    <div className="card  mx-auto">
      <div class="card-header">
        <h4 class="card-title text-center">Histórico de curva seleccionada</h4>

      </div>

      <div className="card-body ">
        <div className="table-responsive-xl">
          {loading ? <Cargando text="Realizando consulta de variable seleccionada" /> :
            <MDBDataTableV5
              searchLabel={"Buscar"}
              infoLabel={['', '-', 'de', '']}
              hover
              bordered
              entriesOptions={[10, 20, 30]}
              entries={10}
              pagesAmount={4}
              data={datatable}
              fullPagination

              responsive
              responsiveSm
              small
            //scrollY
            />}
        </div>
      </div>
    </div>

  )
}

export default TableSingleVariable
