import companyData from "@/data/company.json";

export default function TalentGrid() {
  const { talent } = companyData;

  const getMemberImage = (name: string) => {
    const imageMap: { [key: string]: string } = {
      あきと: "/talent/akito1.jpg",
      けんご: "/talent/kengo2.jpg",
      だいや: "/talent/daiya3.jpg",
      なぎさ: "/talent/nagisa4.jpg",
      ましろ: "/talent/mashiro5.jpg",
      ゆいと: "/talent/yuito6.jpg",
    };
    return imageMap[name] || "/hero/allmember_original.jpg";
  };

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      イエロー: "text-amber-400",
      グリーン: "text-emerald-500",
      レッド: "text-red-500",
      ライトブルー: "text-sky-400",
      ピンク: "text-pink-400",
      オレンジ: "text-orange-400",
    };
    return colorMap[color] || "text-black";
  };

  const getBackgroundColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      ライトブルー: "#60A5FA",
      イエロー: "#FBBF24",
      グリーン: "#34D399",
      レッド: "#F87171",
      ピンク: "#F472B6",
      オレンジ: "#FB923C",
    };
    return colorMap[color] || "#000000";
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
                <img
                  src={getMemberImage(member.name)}
                  alt={`${member.name}の写真`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* メンバー情報 */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* メンバー名 */}
                  <div className="text-center">
                    <h3
                      className={`text-2xl font-bold ${getColorClass(member.color)} mb-2`}
                    >
                      {member.name}
                    </h3>
                  </div>

                  {/* 担当カラー */}
                  <div className="flex items-center">
                    <span
                      className="w-4 h-4 rounded-full mr-3"
                      style={{
                        backgroundColor: getBackgroundColor(member.color),
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
