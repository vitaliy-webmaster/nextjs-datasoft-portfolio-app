provider "aws" {
  region = "eu-west-3"
  access_key = ""
  secret_key = ""
}

resource "aws_vpc" "dev_aws_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name: "development"
  }
}

resource "aws_subnet" "dev_aws_subnet_1" {
  vpc_id = aws_vpc.dev_aws_vpc.id
  cidr_block = "10.0.10.0/24"
  availability_zone = "eu-west-3"
  tags = {
    Name: "development-subnet"
  }
}

data "aws_vpc" "existing_vpc" {
  default = true
}

resource "aws_subnet" "existing_vpc_subnet_1" {
  vpc_id = data.aws_vpc.existing_vpc.id
  cidr_block = "10.0.10.0/24"
  availability_zone = "eu-west-3"
}
