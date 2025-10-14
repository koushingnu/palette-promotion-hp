import Image from 'next/image';
import companyData from "@/data/company.json";

export default function TalentGrid() {
  const { talent } = companyData;

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      イエロー: "bg-yellow-400",
      グリーン: "bg-green-400",
      レッド: "bg-red-400",
      ライトブルー: "bg-blue-400",
      ピンク: "bg-pink-400",
      オレンジ: "bg-orange-400",
    };
    return colorMap[color] || "bg-gray-400";
  };

  const getMemberImage = (name: string) => {
    const imageMap: { [key: string]: string } = {
      "あきと": "/akito1.jpg",
      "けんご": "/kengo2.jpg",
      "だいや": "/daiya3.jpg",
      "なぎさ": "/nagisa4.jpg",
      "ましろ": "/mashiro5.jpg",
      "ゆいと": "/yuito6.jpg",
    };
    return imageMap[name] || "/allmember.jpg";
  };

  return (
    <section id="talent" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            TALENT
          </h2>
          <p className="text-lg text-gray-600">NiziIROぱれっとのメンバー紹介</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talent.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* メンバー画像エリア */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getMemberImage(member.name)}
                  alt={`${member.name}の写真`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-lg opacity-90">{member.color}</p>
                  </div>
                </div>
              </div>

              {/* メンバー情報 */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* 担当カラー */}
                  <div className="flex items-center">
                    <span
                      className="w-4 h-4 rounded-full mr-3"
                      style={{
                        backgroundColor:
                          member.color === "ライトブルー"
                            ? "#60A5FA"
                            : member.color === "イエロー"
                              ? "#FBBF24"
                              : member.color === "グリーン"
                                ? "#34D399"
                                : member.color === "レッド"
                                  ? "#F87171"
                                  : member.color === "ピンク"
                                    ? "#F472B6"
                                    : "#FB923C",
                      }}
                    ></span>
                    <span className="text-sm text-gray-600">
                      担当カラー: {member.color}
                    </span>
                  </div>

                  {/* 誕生日 */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      誕生日
                    </h4>
                    <p className="text-gray-600">{member.birthday}</p>
                  </div>

                  {/* 趣味 */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      趣味
                    </h4>
                    <p className="text-gray-600">{member.hobby}</p>
                  </div>

                  {/* 特技 */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      特技
                    </h4>
                    <p className="text-gray-600">{member.skill}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
