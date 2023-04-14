uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform vec2 mousePositions;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying float elevation;

void main()
{
  vec3 pos = position;

  float xMouse = mousePositions.x;
  float yMouse = 1.0 - mousePositions.y;
  float baseStep = 0.1;

  pos.z += smoothstep(xMouse - baseStep, xMouse, uv.x) - smoothstep(xMouse, xMouse + baseStep, uv.x);
  pos.z *= smoothstep(yMouse - baseStep, yMouse, uv.y) - smoothstep(yMouse, yMouse  + baseStep, uv.y);
  pos.z *= 0.14;

  vec4 projectedPosition = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);

  gl_Position = projectedPosition;

  vUv = uv;
  elevation = pos.z;
}
