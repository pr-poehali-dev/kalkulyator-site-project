
import Calculator from "@/components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-800">Калькулятор</h1>
        <p className="text-lg text-slate-600">Простой и удобный калькулятор для выполнения базовых арифметических операций</p>
      </div>
      
      <Calculator />
      
      <div className="mt-8 text-sm text-slate-500 text-center">
        <p>Создан с ❤️ для вас | © 2023</p>
      </div>
    </div>
  );
};

export default Index;
