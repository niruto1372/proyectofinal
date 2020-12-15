import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu,  SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


const Sidebarm = () => {


  return (
    <div>

      <div className="sidebar " data-active-color="danger">
        <div className="logo mb-5">
          <div className="simple-text logo-normal">
            Variables por área
          </div>
        </div>
        <div className="sidebar-wrapper ">
          <ProSidebar >

            <SidebarContent>
              <Menu iconShape="circle">
                <SubMenu icon={<i className="fas fa-box"></i>} title="Coco 3" >
                  <SubMenu title="Eléctrico" >
                    <MenuItem>Motor</MenuItem>
                  </SubMenu>
                  <SubMenu  title="Hidráulico" >
                    <MenuItem>Tanque</MenuItem>
                    <MenuItem>Molde</MenuItem>
                  </SubMenu>
                  <SubMenu  title="Mecánico" >
                    <MenuItem>Stroke1</MenuItem>
                    <MenuItem>Stroke2</MenuItem>
                  </SubMenu>
                  <SubMenu  title="Proceso" >
                    <MenuItem>Lingotera 1</MenuItem>
                    <MenuItem>Lingotera 2</MenuItem>
                  </SubMenu>
                </SubMenu>
              </Menu>

              <Menu iconShape="circle">
                <SubMenu icon={<i className="fab fa-cloudsmith"></i>} title="Cizalla" >
                  <SubMenu title="Central Hidráulica" >
                    <MenuItem>Dampers</MenuItem>
                  </SubMenu>
                  <SubMenu title="Sistema de Limpieza" >
                    <MenuItem>Aglamper</MenuItem>
                  </SubMenu>
                </SubMenu>
              </Menu>

              <Menu iconShape="circle">
                <SubMenu icon={<i className="fas fa-crutch"></i>} title="Horno Cuchara" >
                  <SubMenu title="Transformador" >
                    <MenuItem>Lanza Oxigeno</MenuItem>
                  </SubMenu>
                  <SubMenu title="Baghouse" >
                    <MenuItem>Stirring</MenuItem>
                  </SubMenu>
                </SubMenu>
              </Menu>

              <Menu iconShape="circle">
                <SubMenu icon={<i className="fas fa-bullseye"></i>} title="Horno Eléctrico" >
                  <SubMenu title="Horno" >
                    <MenuItem>Boveda</MenuItem>
                  </SubMenu>
                  <SubMenu title="Carro Cesta" >
                    <MenuItem>Carro 1</MenuItem>
                    <MenuItem>Carro 2</MenuItem>
                  </SubMenu>
                  <SubMenu title="Central Hidráulica" >
                    <MenuItem>Principal</MenuItem>
                    <MenuItem>Acumuladores</MenuItem>
                  </SubMenu>
                  <SubMenu title="HRR" >
                    <MenuItem>Transformador</MenuItem>
                    <MenuItem>Ducto</MenuItem>
                  </SubMenu>
                </SubMenu>
              </Menu>

            </SidebarContent>
            <SidebarFooter>
              
              Debes seleccionar una de las 4 áreas que se muestran. Cada área contiene sus respectivos sistemas. Cada sistema tiene sus respectivos subsistemas.
              Cada subsistema muestra una lista de variables en el panel principal.
            </SidebarFooter>

          </ProSidebar>
        
        </div>
      </div>





    </div>
  )



};

export default Sidebarm



