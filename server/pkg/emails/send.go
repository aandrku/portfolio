package emails

import (
	"errors"
	"fmt"

	"gopkg.in/gomail.v2"
)

var EmailNotSent = errors.New("Email not sent")

func Send(name, email, message string) error {
	from := myEmail
	password := myEmailPassword

	to := myEmail

	smtpHost := "smtp.gmail.com"
	smtpProtocol := 587

	m := gomail.NewMessage()
	m.SetHeader("From", from)
	m.SetHeader("To", to)
	m.SetHeader("Subject", "Someone is trying to contact me.")
	body := fmt.Sprintf("CONTACTOR NAME: %s\nCONTACTOR EMAIL: %s\n Message: \n\n%s", name, email, message)
	m.SetBody("text/plain", body)

	d := gomail.NewDialer(smtpHost, smtpProtocol, from, password)

	if err := d.DialAndSend(m); err != nil {
		fmt.Println(fmt.Errorf("Not able to send email: %v", err))
		return EmailNotSent
	}

	return nil

}
