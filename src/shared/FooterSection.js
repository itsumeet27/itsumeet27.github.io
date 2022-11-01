import { Container } from "react-bootstrap";

function FooterSection() {
    return (
        <footer className="py-2 bg-dark text-white">
            <Container>
                <div className="text-center">
                    <p className="mb-0" style={{ fontSize: '14px' }}>Sumeet Sharma &copy; All Rights Reserved 2022</p>
                </div>
            </Container>
        </footer>
    );
}

export default FooterSection;