exports.about = (req, res) =>
  res.status(200).setHeader("Content-Type", "text/html").send(`
        <html>
            <head>
            </head>
            <script>
                console.log('testing about page');
            </script>
            <body>
                <h1>Hello Visitor!</h1>
                <p> this page is for you to know<b> about  us<b></p>
                <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60">
            </body>
        </html>
 `);

exports.contact = (req, res) =>
  res.status(200).setHeader("Content-Type", "text/html").send(`
        <html>
            <head>
            </head>
            <script>
                console.log('testing contact page');
            </script>
            <body>
                <h1>Hello Visitor!</h1>
                <p> this page is for you to<b> contact  us<b></p>
                <img src = "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
            </body>
        </html>
 `);
