import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useLoader, useFrame } from "react-three-fiber";

 function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/shoe.gltf");
  // const { actions } = useAnimations(animations, group);
const { actions, names } = useAnimations(animations, group);
useEffect(() => {
  console.log(actions, names);
  actions[names].play();
});
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={7.033}
          >
            <group
              name="a6df309e79fa46b494291897a50f962efbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Object_4">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_6"
                      position={[0.045, -0.446, -1.795]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={27.601}
                    />
                    <group
                      name="Object_8"
                      position={[0.045, -0.446, -1.795]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={27.601}
                    />
                    <group
                      name="Object_10"
                      position={[0.045, -0.446, -1.795]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={27.601}
                    />
                    <group
                      name="Object_12"
                      position={[0.045, -0.446, -1.795]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={27.601}
                    />
                    <group
                      name="Object_14"
                      position={[0.045, -0.446, -1.795]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={27.601}
                    />
                    <group
                      name="Object_16"
                      position={[0.045, -0.446, -1.795]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={27.601}
                    />
                    <group
                      name="Object_18"
                      position={[0.045, -0.446, -1.795]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={27.601}
                    />
                    <group
                      name="Object_20"
                      position={[0.045, -0.446, -1.795]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={27.601}
                    />
                    <group
                      name="Object_22"
                      position={[0.045, -0.446, -1.795]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={27.601}
                    />
                    <group
                      name="root"
                      position={[0.044, 26.213, -25.853]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    >
                      <group name="node_id101" scale={0.001}>
                        <group
                          name="node_id4"
                          position={[0.002, -243.342, 14.714]}
                          rotation={[0.032, 0, 0]}
                          scale={276.008}
                        >
                          <group
                            name="node_id5"
                            position={[0, 0, 0.098]}
                            rotation={[-0.137, 0, 0]}
                          >
                            <group
                              name="node_id6"
                              position={[0, 0, 0.13]}
                              rotation={[-0.064, 0, 0]}
                            >
                              <group
                                name="node_id7"
                                position={[0, 0, 0.122]}
                                rotation={[0.094, 0, 0]}
                              >
                                <group
                                  name="node_id8"
                                  position={[0, 0, 0.156]}
                                  rotation={[0.409, 0, 0]}
                                >
                                  <group
                                    name="node_id9"
                                    position={[0, 0, 0.123]}
                                    rotation={[-0.327, 0, 0]}
                                  >
                                    <group
                                      name="node_id10"
                                      position={[0, -0.037, 0.226]}
                                      rotation={[-0.007, 0, 0]}
                                    />
                                    <group
                                      name="node_id11"
                                      position={[0.03, -0.082, 0.088]}
                                      rotation={[-0.007, 0, 0]}
                                    />
                                    <group
                                      name="node_id12"
                                      position={[-0.03, -0.082, 0.088]}
                                      rotation={[-0.007, 0, 0]}
                                    />
                                  </group>
                                </group>
                                <group
                                  name="node_id13"
                                  position={[0.047, 0.006, 0.141]}
                                  rotation={[-2.929, 1.53, -1.794]}
                                >
                                  <group
                                    name="node_id14"
                                    position={[0, 0, 0.119]}
                                    rotation={[0.995, 0.144, 0.019]}
                                  >
                                    <group
                                      name="node_id15"
                                      position={[0, 0, 0.285]}
                                      rotation={[-0.096, -0.446, 0.026]}
                                    >
                                      <group
                                        name="node_id16"
                                        position={[0, 0, 0.252]}
                                        rotation={[0.091, 0.041, 0.076]}
                                      >
                                        <group
                                          name="node_id17"
                                          position={[-0.032, -0.005, 0.026]}
                                          rotation={[0.454, -0.841, 0.183]}
                                        >
                                          <group
                                            name="node_id18"
                                            position={[0, 0, 0.041]}
                                            rotation={[0.153, 0.494, -0.193]}
                                          >
                                            <group
                                              name="node_id19"
                                              position={[0, 0, 0.03]}
                                              rotation={[0.024, 0.169, -0.052]}
                                            >
                                              <group
                                                name="node_id20"
                                                position={[0, 0, 0.035]}
                                                rotation={[0.025, 0.015, 0.105]}
                                              />
                                            </group>
                                          </group>
                                        </group>
                                        <group
                                          name="node_id21"
                                          position={[-0.035, 0.007, 0.097]}
                                          rotation={[0.176, -0.151, -0.09]}
                                        >
                                          <group
                                            name="node_id22"
                                            position={[0, 0, 0.045]}
                                            rotation={[0.19, -0.052, -0.007]}
                                          >
                                            <group
                                              name="node_id23"
                                              position={[0, 0, 0.028]}
                                              rotation={[0.172, 0.029, -0.155]}
                                            >
                                              <group
                                                name="node_id24"
                                                position={[0, 0, 0.034]}
                                                rotation={[0.089, 0.019, 0.113]}
                                              />
                                            </group>
                                          </group>
                                        </group>
                                        <group
                                          name="node_id25"
                                          position={[-0.009, 0.003, 0.1]}
                                          rotation={[0.075, -0.036, -0.134]}
                                        >
                                          <group
                                            name="node_id26"
                                            position={[0, 0, 0.046]}
                                            rotation={[0.256, -0.088, -0.008]}
                                          >
                                            <group
                                              name="node_id27"
                                              position={[0, 0, 0.035]}
                                              rotation={[0.409, 0.076, -0.062]}
                                            >
                                              <group
                                                name="node_id28"
                                                position={[0, 0, 0.035]}
                                                rotation={[0.048, 0.004, 0.045]}
                                              />
                                            </group>
                                          </group>
                                        </group>
                                        <group
                                          name="node_id29"
                                          position={[0.015, -0.002, 0.096]}
                                          rotation={[0.135, 0.109, -0.118]}
                                        >
                                          <group
                                            name="node_id30"
                                            position={[0, 0, 0.042]}
                                            rotation={[0.374, -0.096, -0.015]}
                                          >
                                            <group
                                              name="node_id31"
                                              position={[0, 0, 0.036]}
                                              rotation={[0.078, -0.004, -0.011]}
                                            >
                                              <group
                                                name="node_id32"
                                                position={[0, 0, 0.03]}
                                                rotation={[
                                                  0.013, -0.044, -0.014,
                                                ]}
                                              />
                                            </group>
                                          </group>
                                        </group>
                                        <group
                                          name="node_id33"
                                          position={[0.039, -0.011, 0.09]}
                                          rotation={[0.228, 0.295, -0.179]}
                                        >
                                          <group
                                            name="node_id34"
                                            position={[0, 0, 0.028]}
                                            rotation={[0.215, -0.167, -0.411]}
                                          >
                                            <group
                                              name="node_id35"
                                              position={[0, 0, 0.022]}
                                              rotation={[0.246, -0.027, -0.021]}
                                            >
                                              <group
                                                name="node_id36"
                                                position={[0, 0, 0.026]}
                                                rotation={[0.272, 0.053, 0.204]}
                                              />
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name="node_id37"
                                  position={[-0.047, 0.006, 0.141]}
                                  rotation={[-2.929, -1.53, 1.794]}
                                >
                                  <group
                                    name="node_id38"
                                    position={[0, 0, 0.119]}
                                    rotation={[0.995, -0.144, -0.019]}
                                  >
                                    <group
                                      name="node_id39"
                                      position={[0, 0, 0.285]}
                                      rotation={[-0.096, 0.446, -0.026]}
                                    >
                                      <group
                                        name="node_id40"
                                        position={[0, 0, 0.252]}
                                        rotation={[0.091, -0.041, -0.076]}
                                      >
                                        <group
                                          name="node_id41"
                                          position={[0.032, -0.005, 0.026]}
                                          rotation={[0.454, 0.841, -0.183]}
                                        >
                                          <group
                                            name="node_id42"
                                            position={[0, 0, 0.041]}
                                            rotation={[0.153, -0.494, 0.193]}
                                          >
                                            <group
                                              name="node_id43"
                                              position={[0, 0, 0.03]}
                                              rotation={[0.024, -0.169, 0.052]}
                                            >
                                              <group
                                                name="node_id44"
                                                position={[0, 0, 0.035]}
                                                rotation={[
                                                  0.025, -0.015, -0.105,
                                                ]}
                                              />
                                            </group>
                                          </group>
                                        </group>
                                        <group
                                          name="node_id45"
                                          position={[0.035, 0.007, 0.097]}
                                          rotation={[0.176, 0.151, 0.09]}
                                        >
                                          <group
                                            name="node_id46"
                                            position={[0, 0, 0.045]}
                                            rotation={[0.19, 0.052, 0.007]}
                                          >
                                            <group
                                              name="node_id47"
                                              position={[0, 0, 0.028]}
                                              rotation={[0.172, -0.029, 0.155]}
                                            >
                                              <group
                                                name="node_id48"
                                                position={[0, 0, 0.034]}
                                                rotation={[
                                                  0.089, -0.019, -0.113,
                                                ]}
                                              />
                                            </group>
                                          </group>
                                        </group>
                                        <group
                                          name="node_id49"
                                          position={[0.009, 0.003, 0.1]}
                                          rotation={[0.075, 0.036, 0.134]}
                                        >
                                          <group
                                            name="node_id50"
                                            position={[0, 0, 0.046]}
                                            rotation={[0.256, 0.088, 0.008]}
                                          >
                                            <group
                                              name="node_id51"
                                              position={[0, 0, 0.035]}
                                              rotation={[0.409, -0.076, 0.062]}
                                            >
                                              <group
                                                name="node_id52"
                                                position={[0, 0, 0.035]}
                                                rotation={[
                                                  0.048, -0.004, -0.045,
                                                ]}
                                              />
                                            </group>
                                          </group>
                                        </group>
                                        <group
                                          name="node_id53"
                                          position={[-0.015, -0.002, 0.096]}
                                          rotation={[0.135, -0.109, 0.118]}
                                        >
                                          <group
                                            name="node_id54"
                                            position={[0, 0, 0.042]}
                                            rotation={[0.374, 0.096, 0.015]}
                                          >
                                            <group
                                              name="node_id55"
                                              position={[0, 0, 0.036]}
                                              rotation={[0.078, 0.004, 0.011]}
                                            >
                                              <group
                                                name="node_id56"
                                                position={[0, 0, 0.03]}
                                                rotation={[0.013, 0.044, 0.014]}
                                              />
                                            </group>
                                          </group>
                                        </group>
                                        <group
                                          name="node_id57"
                                          position={[-0.039, -0.011, 0.09]}
                                          rotation={[0.228, -0.295, 0.179]}
                                        >
                                          <group
                                            name="node_id58"
                                            position={[0, 0, 0.028]}
                                            rotation={[0.215, 0.167, 0.411]}
                                          >
                                            <group
                                              name="node_id59"
                                              position={[0, 0, 0.022]}
                                              rotation={[0.246, 0.027, 0.021]}
                                            >
                                              <group
                                                name="node_id60"
                                                position={[0, 0, 0.026]}
                                                rotation={[
                                                  0.272, -0.053, -0.204,
                                                ]}
                                              />
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                          <group
                            name="node_id61"
                            position={[0.095, 0.003, 0.005]}
                            rotation={[3.122, 0.066, -3.138]}
                          >
                            <group
                              name="node_id62"
                              position={[0, 0, 0.458]}
                              rotation={[-0.083, 0.006, 0]}
                            >
                              <group
                                name="node_id63"
                                position={[0, 0, 0.444]}
                                rotation={[1.064, 0.014, 0.03]}
                              >
                                <group
                                  name="node_id64"
                                  position={[0, 0, 0.149]}
                                  rotation={[0.542, -0.059, -0.074]}
                                >
                                  <group
                                    name="node_id65"
                                    position={[0, 0, 0.099]}
                                    rotation={[0.035, -0.016, 1.547]}
                                  />
                                </group>
                              </group>
                            </group>
                          </group>
                          <group
                            name="node_id66"
                            position={[-0.095, 0.003, 0.005]}
                            rotation={[3.122, -0.066, 3.138]}
                          >
                            <group
                              name="node_id67"
                              position={[0, 0, 0.458]}
                              rotation={[-0.083, -0.006, 0]}
                            >
                              <group
                                name="node_id68"
                                position={[0, 0, 0.444]}
                                rotation={[1.064, -0.014, -0.03]}
                              >
                                <group
                                  name="node_id69"
                                  position={[0, 0, 0.149]}
                                  rotation={[0.542, 0.059, 0.074]}
                                >
                                  <group
                                    name="node_id70"
                                    position={[0, 0, 0.099]}
                                    rotation={[0.035, 0.016, -1.547]}
                                  />
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                        <group
                          name="node_id71"
                          position={[0.002, -240.574, -266.591]}
                          scale={276.008}
                        >
                          <group name="node_id72" />
                        </group>
                        <group
                          name="node_id74"
                          position={[0.002, -240.574, -266.591]}
                          scale={276.008}
                        >
                          <group name="node_id75" />
                        </group>
                        <group
                          name="node_id77"
                          position={[0.002, -240.574, -266.591]}
                          scale={276.008}
                        >
                          <group name="node_id78" />
                        </group>
                        <group
                          name="node_id80"
                          position={[0.002, -240.574, -266.591]}
                          scale={276.008}
                        >
                          <group name="node_id81" />
                        </group>
                        <group
                          name="node_id83"
                          position={[0.002, -240.574, -266.591]}
                          scale={276.008}
                        >
                          <group name="node_id84" />
                        </group>
                        <group
                          name="node_id86"
                          position={[0.002, -240.574, -266.591]}
                          scale={276.008}
                        >
                          <group name="node_id87" />
                        </group>
                        <group
                          name="node_id89"
                          position={[0.002, -240.574, -266.591]}
                          scale={276.008}
                        >
                          <group name="node_id90" />
                        </group>
                        <group
                          name="node_id92"
                          position={[0.002, -240.574, -266.591]}
                          scale={276.008}
                        >
                          <group name="node_id93" />
                        </group>
                        <group
                          name="node_id95"
                          position={[0.002, -240.574, -266.591]}
                          scale={276.008}
                        >
                          <group name="node_id96" />
                        </group>
                        <group
                          name="node_id98"
                          position={[0.002, -240.574, -266.591]}
                          scale={276.008}
                        />
                      </group>
                    </group>
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.material_1}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.material_2}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.material_3}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.material_4}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.material_5}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials.material_6}
                      skeleton={nodes.Object_19.skeleton}
                    />
                    <skinnedMesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials.material_7}
                      skeleton={nodes.Object_21.skeleton}
                    />
                    <skinnedMesh
                      name="Object_23"
                      geometry={nodes.Object_23.geometry}
                      material={materials.material_8}
                      skeleton={nodes.Object_23.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/shoe.gltf");

export default Model;
