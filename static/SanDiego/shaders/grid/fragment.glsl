precision mediump float;
uniform vec2 grid;
uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;
uniform float alpha;
uniform bool fog;

varying vec2 vUv;
varying float elevation;

void main()
{
  vec3 lineColor = vec3(0.7, 0.3, 1.0);
  vec3 tileColor = vec3(0.08, 0.03, 0.0);

  float modX = mod(vUv.x * grid.x, 1.0) ;
  float modY = mod(vUv.y * grid.y, 1.0);

  float strength = smoothstep(0.0, 0.02, modX) - smoothstep(0.98, 1.0, modX);
  strength *= smoothstep(0.0, 0.02, modY) - smoothstep(0.98, 1.0, modY);
  gl_FragColor = vec4(mix(lineColor, tileColor, strength), float(alpha));

  if(fog) {
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = smoothstep(fogNear, fogFar, depth);
    gl_FragColor.xyz = mix(gl_FragColor.xyz, fogColor, fogFactor);
  }

}
