import companyData from "@/data/company.json";

export default function CompanyInfo() {
  const { company } = companyData;

  return (
    <section id="company" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            COMPANY
          </h2>
          <p className="text-lg text-gray-600">会社情報</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {company.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {company.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    所在地
                  </h4>
                  <p className="text-gray-700">{company.address}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    電話番号
                  </h4>
                  <p className="text-gray-700">{company.phone}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    メールアドレス
                  </h4>
                  <p className="text-gray-700">{company.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
