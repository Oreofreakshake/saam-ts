import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

export default function TopBar({ showSaam, setShowSaam }: Props) {
    return (
        <AppBar position="static" className="py-6">
            <div className="text-center text-6xl font-black">Saam</div>
            <div className="flex justify-center pt-16">
                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    className="focus:outline-none"
                    onClick={() => {
                        alert("Saam.ts");
                        setShowSaam(!showSaam);
                    }}
                >
                    Saam.ts
                </Button>
            </div>
        </AppBar>
    );
}

interface Props {
    showSaam: boolean;
    setShowSaam: any;
}
