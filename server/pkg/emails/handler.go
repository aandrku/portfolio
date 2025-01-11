package emails

import (
	"encoding/json"
	"io"
	"net/http"
	"net/mail"
)

func EmailHandler(w http.ResponseWriter, r *http.Request) {
	data, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Invalid body", http.StatusBadRequest)
		return
	}

	var contactMsg ContactMessage

	if err := json.Unmarshal(data, &contactMsg); err != nil {
		http.Error(w, "Invalid body", http.StatusBadRequest)
		return
	}

	if _, err := mail.ParseAddress(contactMsg.Email); err != nil {
		http.Error(w, "Please provide a valid email address.", http.StatusBadRequest)
		return
	}

	if err = Send(contactMsg.Name, contactMsg.Email, contactMsg.Message); err != nil {
		http.Error(w, "Failed to send message. Please try again later.", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
}
