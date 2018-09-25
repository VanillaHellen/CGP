#version 430 core
out vec4 FragColor;

uniform sampler2D textureSampler;
uniform vec3 lightDir;

in vec3 interpNormal;
in vec2 interpTexCoord;
in vec3 vertexWorldPosition;

uniform vec3 cameraPos;
uniform samplerCube skybox;

void main()
{
	//vec2 modifiedTexCoord = vec2(interpTexCoord.x, 1.0 - interpTexCoord.y); // Poprawka dla tekstur Ziemi, ktore bez tego wyswietlaja sie 'do gory nogami'
	//vec3 color = texture2D(textureSampler, modifiedTexCoord).rgb;
	vec3 normal = normalize(interpNormal);
	//float diffuse = max(dot(normal, -lightDir), 0.0);
	//gl_FragColor = vec4(color * diffuse, 1.0);
	vec3 I = normalize(cameraPos - vertexWorldPosition);
    vec3 R = reflect(-I, normalize(interpNormal));
    FragColor = vec4(texture(skybox, R).rgb, 1.0);
}
