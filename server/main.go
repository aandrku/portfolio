package main

import (
	"fmt"
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
		Addr: ":80",
		Handler: mux,
	}

	fmt.Println("Listening on port 80...")
	server.ListenAndServe()

}

func RootHandler (w http.ResponseWriter, r *http.Request) {
	filePath := "./pages/index.html"	

	http.ServeFile(w, r, filePath)

}
