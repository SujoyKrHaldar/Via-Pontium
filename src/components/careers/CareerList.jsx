import CareerCard from "../designs/cards/CareerCard";

function CareerList() {
  return (
    <>
      <div className="container w-full h-full py-12">
        <h2 className="mb-8">Find yourself a Job.</h2>

        <div className="grid grid-cols-4 gap-4">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
    </>
  );
}

export default CareerList;
