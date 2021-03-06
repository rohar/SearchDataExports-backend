variable "name_prefix" {
  description = "Prefix to use when naming resources"
}

variable "project" {
  description = "The name of the project"
}

variable "environment" {
  description = "The name of the environment we're creating, i.e prod, uat, dev etc."
}

variable "api_method_integration_ids" {
  description = "List of method_integration_ids associated with this API gateway. Not directly used, but is used to delay the aws_api_gateway_deployment until all the child resources are created"
  type = "list"
}
