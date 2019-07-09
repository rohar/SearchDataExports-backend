variable "region" {
  description = "The AWS region name"
}

variable "project" {
  description = "The name of the project"
}

variable "environment" {
  description = "The name of the environment we're creating, i.e prod, uat, dev etc."
}

variable "search_lambda_invoke_arn" {
  description = "The arn of the search lambda"
}
