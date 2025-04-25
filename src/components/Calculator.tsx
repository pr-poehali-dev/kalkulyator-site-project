
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Divide, Minus, Plus, Equals, Delete } from "lucide-react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = () => {
    setDisplay("0");
    setCurrentValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay("0");
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (currentValue === null) {
      setCurrentValue(display);
    } else if (operation) {
      const currentValueNum = parseFloat(currentValue);
      let newValue: number;
      
      switch (operation) {
        case "+":
          newValue = currentValueNum + inputValue;
          break;
        case "-":
          newValue = currentValueNum - inputValue;
          break;
        case "×":
          newValue = currentValueNum * inputValue;
          break;
        case "÷":
          newValue = currentValueNum / inputValue;
          break;
        default:
          newValue = inputValue;
      }

      setCurrentValue(String(newValue));
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  return (
    <div className="bg-card border rounded-xl shadow-lg w-full max-w-xs overflow-hidden">
      <div className="p-3 bg-muted text-right">
        <div className="text-2xl font-medium font-mono truncate">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-1 p-3 bg-card">
        <Button variant="outline" onClick={clearAll} className="col-span-2">AC</Button>
        <Button variant="outline" onClick={clearEntry}><Delete className="h-4 w-4" /></Button>
        <Button variant="outline" onClick={() => performOperation("÷")}><Divide className="h-4 w-4" /></Button>
        
        <Button variant="outline" onClick={() => inputDigit("7")}>7</Button>
        <Button variant="outline" onClick={() => inputDigit("8")}>8</Button>
        <Button variant="outline" onClick={() => inputDigit("9")}>9</Button>
        <Button variant="outline" onClick={() => performOperation("×")}><X className="h-4 w-4" /></Button>
        
        <Button variant="outline" onClick={() => inputDigit("4")}>4</Button>
        <Button variant="outline" onClick={() => inputDigit("5")}>5</Button>
        <Button variant="outline" onClick={() => inputDigit("6")}>6</Button>
        <Button variant="outline" onClick={() => performOperation("-")}><Minus className="h-4 w-4" /></Button>
        
        <Button variant="outline" onClick={() => inputDigit("1")}>1</Button>
        <Button variant="outline" onClick={() => inputDigit("2")}>2</Button>
        <Button variant="outline" onClick={() => inputDigit("3")}>3</Button>
        <Button variant="outline" onClick={() => performOperation("+")}><Plus className="h-4 w-4" /></Button>
        
        <Button variant="outline" onClick={() => inputDigit("0")} className="col-span-2">0</Button>
        <Button variant="outline" onClick={() => inputDot()}>.</Button>
        <Button variant="default" onClick={() => performOperation("=")} className="bg-primary text-primary-foreground">
          <Equals className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
