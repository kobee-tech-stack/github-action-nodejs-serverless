name                = "api-pub-technology-fargate"
environment         = "development"
availability_zones  = ["us-west-2a", "us-west-2b"]
private_subnets     = ["10.0.0.0/20", "10.0.32.0/20"]
public_subnets      = ["10.0.16.0/20", "10.0.48.0/20"]
tsl_certificate_arn = "mycertificatearn"
container_memory    = 512
