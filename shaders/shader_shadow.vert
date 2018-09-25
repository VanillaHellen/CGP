#version 430 core

layout(location = 0) in vec3 vertexPosition;
layout(location = 1) in vec2 vertexTexCoord;
layout(location = 2) in vec3 vertexNormal;

uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelMatrix;
uniform mat4 lightMatrix;

out vec3 interpNormal;
out vec3 interpPos;
out vec2 interpTexCoord;
out vec4 lightPos;

void main()
{
	gl_Position = modelViewProjectionMatrix * vec4(vertexPosition, 1.0);
	interpNormal = normalize((modelMatrix * vec4(vertexNormal, 0.0)).xyz);
	interpTexCoord = vertexTexCoord;
	interpPos = (modelMatrix * vec4(vertexPosition, 1.0)).xyz;
	lightPos = lightMatrix * vec4(vertexPosition, 1.0);
}