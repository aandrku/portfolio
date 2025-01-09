package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	fs := http.FileServer(http.Dir("."))

	mux := http.NewServeMux()

	mux.Handle("/dist/", fs)
	mux.Handle("/css/", fs)
	mux.Handle("/assets/", fs)
	mux.HandleFunc("/", RootHandler)

	server := http.Server{
		Addr:    ":80",
		Handler: mux,
	}

	fmt.Println("Listening on port 80...")
	if err := server.ListenAndServe(); err != nil {
		log.Fatal(fmt.Errorf("Failed to start a server: %v", err))
	}

}

func RootHandler(w http.ResponseWriter, r *http.Request) {
	filePath := "./pages/index.html"

	http.ServeFile(w, r, filePath)

}
