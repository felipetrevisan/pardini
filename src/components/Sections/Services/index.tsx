import { Title } from "@/components/ui/Title";
import { Suspense } from "react";
import { Loading } from "../Faq/loading";
import { ServicesItems } from "../Services/service";
import { getServices } from "@/services/service";

export async function Services() {
  const [servicesHaving, servicesNotHaving] = await Promise.all([
    getServices("HAVING"),
    getServices("NOT_HAVING"),
  ]);

  return (
    <>
      <div className="h-full w-screen flex my-20" data-section="services">
        <div className="container flex items-center justify-start gap-1">
          <div className="w-full flex flex-col gap-14">
            <Title className="uppercase">Nossos Serviços</Title>
            <Suspense fallback={<Loading />}>
              <ServicesItems
                servicesHaving={servicesHaving.content ?? []}
                servicesNotHaving={servicesNotHaving.content ?? []}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
