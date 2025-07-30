<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HIBRADE Contact Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2 class="mb-4">Contact Form - HIBRADE</h2>
        <form id="contactForm" class="contact-form" action="sendmail.php" method="POST">
            <div class="mb-3">
                <input type="text" name="name" class="form-control" placeholder="Your Name" required>
            </div>
            <div class="mb-3">
                <input type="email" name="email" class="form-control" placeholder="Your Email" required>
            </div>
            <div class="mb-3">
                <input type="tel" name="phone" class="form-control" placeholder="Your Phone">
            </div>
            <div class="mb-3">
                <select name="service" class="form-select" required>
                    <option value="" disabled selected>Select a Service</option>
                    <option>Web Development</option>
                    <option>Web Management</option>
                    <option>Dashboard Solutions</option>
                    <option>Other</option>
                </select>
            </div>
            <div class="mb-3">
                <textarea name="message" class="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
    </div>
</body>
</html>
