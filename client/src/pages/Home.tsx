import Container from "../components/Container";
import NavigationBar from "../components/NavigationBar";
import WorkoutLogger from "../components/WorkoutLogger/WorkoutLogger";

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <Container className="space-y-6">
                <WorkoutLogger />
            </Container>
        </>
    );
};

export default HomePage;