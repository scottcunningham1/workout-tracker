import Button from "../components/Button/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import Input from "../components/Input/Input";
import NavigationBar from "../components/NavigationBar";

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <Container className="space-y-6">
                <h1 className="text-xl font-semibold">Home</h1>
                <Card className="flex gap-4">
                    <Button>Click me</Button>
                    <Button variant="secondary">Click me</Button>
                    <Button variant="secondary" disabled>Click me</Button>
                </Card>
                <Card className="flex flex-wrap gap-4">
                    <Input type="text" placeholder="Search..." />
                    <Input type="number" placeholder="Reps..." />
                    <Input type="text" placeholder="Search..." disabled />
                </Card>
            </Container>
        </>
    );
};

export default HomePage;