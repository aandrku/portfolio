package emails

import (
	"os"
)

var myEmail string
var myEmailPassword string

func init() {
	myEmail = os.Getenv("EMAIL")
	myEmailPassword = os.Getenv("EMAIL_PASSWORD")

}
