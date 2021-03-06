variable "name_prefix" {
  description = "Prefix to use when naming resources"
}

variable "project" {
  description = "The name of the project"
}

variable "environment" {
  description = "The name of the environment we're creating, i.e prod, uat, dev etc."
}

variable "elasticsearch_arn" {
  description = "The Elasticsearch arn we need to grant our lambda permission to access"
}

variable "s3_arn" {
  description = "The ARN of the S3 bucket all lambda will have access to"
}
