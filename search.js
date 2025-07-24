function search() {
      const query = document.getElementById("searchInput").value;
      if (query.trim() !== "") {
        const url = "https://www.google.com/search?q=" + encodeURIComponent(query); 
        
        window.open(url, "_blank"); // Open in new tab

        
      }
    }