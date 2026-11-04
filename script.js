/* Language switch: English is the initial and default language. Vietnamese is opt-in. */
(function () {
  "use strict";
  const vietnamese = {
    skip:"Bỏ qua đến nội dung chính",
    nav_how:"Cách hoạt động",nav_rewards:"Phần thưởng",nav_why:"Triết lý",nav_story:"Câu chuyện",nav_faq:"Hỏi đáp",nav_cta:"Khám phá LearnWard ",
    hero_status:"Một ý tưởng dành cho gia đình · Đang phát triển",
    hero_title_1:"Nếu việc học",hero_title_2:"cũng là một nhiệm vụ?",
    hero_lead:"LearnWard biến những việc học trẻ vẫn làm mỗi ngày thành tiến trình rõ ràng: nhiệm vụ, XP, cấp độ và phần thưởng ý nghĩa do trẻ và phụ huynh cùng lựa chọn.",
    hero_support:"Không phải để trẻ dùng màn hình nhiều hơn. Mà để có thêm động lực tiếp tục học.",
    hero_explore:"Khám phá ý tưởng",hero_story:"Vì sao bắt đầu",
    hero_note_1:"Dựa trên việc học ngoài đời thực",hero_note_2:"Thiết kế lấy gia đình làm trung tâm",
    mock_personal_best:"Kỷ lục cá nhân mới!",mock_dashboard:"HÀNH TRÌNH CỦA TỚ",mock_welcome:"Chào mừng trở lại, Alex!",mock_level:"Cấp",mock_next:"Nhiệm vụ tiếp theo",mock_quest_tag:"NHIỆM VỤ HẰNG NGÀY",mock_quest_title:"Luyện tập phân số",mock_quest_desc:"Toán · Từng bước tiến bộ",mock_growth:"Tiến bộ kỹ năng",mock_points:"Điểm thưởng",mock_shop:"Vào cửa hàng →",art_note:"Minh họa ý tưởng · Không phải ảnh chụp ứng dụng",
    strip_1:"Học ở bất cứ đâu",strip_2:"Nhìn thấy tiến bộ",strip_3:"Chọn phần thưởng ý nghĩa",
    how_kicker:"VÒNG LẶP HỌC TẬP",how_title:"Mỗi bước tiến nhỏ, thêm một lý do để cố gắng.",how_intro:"LearnWard được thiết kế để ghi nhận nỗ lực mà không buộc trẻ thay đổi nơi học hay cách học quen thuộc.",
    step1_title:"Học ở bất cứ đâu",step1_desc:"Trường học, bài tập giấy, lớp học thêm, sách hay đề luyện. Việc học thật là nơi mỗi nhiệm vụ bắt đầu.",
    step2_title:"Ghi nhận kết quả",step2_desc:"Lưu lại bài làm và xem xét kết quả để tiến bộ phản ánh việc học thực tế, không chỉ vài lần chạm trên ứng dụng.",
    step3_title:"Nhìn thấy sự trưởng thành",step3_desc:"Sự cải thiện, nỗ lực và thành tích trở thành cột mốc dễ hiểu, XP, cấp độ và điểm thưởng được cân đối hợp lý.",
    step4_title:"Chọn phần thưởng",step4_desc:"Tích điểm hướng đến những điều có ý nghĩa trong cửa hàng phần thưởng mà trẻ và phụ huynh đã cùng thống nhất.",
    rewards_kicker:"PHẦN THƯỞNG CÓ MỤC ĐÍCH",rewards_title_1:"Phần thưởng ý nghĩa nhất",rewards_title_2:"không giống nhau ở mọi nhà.",
    rewards_desc:"Có bạn chỉ mong được chọn phim cho cả nhà. Có bạn muốn tích điểm cho một chuyến đi cuối tuần. LearnWard hướng tới cửa hàng phần thưởng được hình thành từ cuộc trò chuyện giữa trẻ và phụ huynh — không phải một danh mục cố định.",
    rewards_benefit_1:"Mục tiêu nhỏ, vừa và lớn giúp duy trì động lực ở nhiều chặng.",rewards_benefit_2:"Phụ huynh đặt giới hạn; trẻ có quyền lựa chọn.",rewards_benefit_3:"Tiến bộ và làm chủ kiến thức quan trọng hơn việc săn quà.",rewards_link:"Triết lý đằng sau hệ thống",
    shop_small:"CỬA HÀNG CỦA GIA ĐÌNH",shop_title:"Một mục tiêu để cố gắng",shop_item1:"Chọn phim tối nay",shop_tier1:"Niềm vui nhỏ",shop_item2:"Thêm thời gian chơi game",shop_tier2:"Mục tiêu cần tích lũy",shop_item3:"Chọn chuyến đi gia đình",shop_tier3:"Chuyến phiêu lưu lớn",shop_caption:"Phần thưởng và số điểm chỉ để minh họa. Mỗi gia đình tự quyết định.",
    approach_kicker:"KHÔNG CHỈ LÀ GAME HÓA",approach_title:"Cảm hứng từ trò chơi. Đặt việc học lên trước.",approach_intro:"Mục tiêu không phải để trẻ mãi chạy theo điểm. Mà là để trẻ nhận ra mình đang tốt lên và dần thấy tự hào về chính việc học.",
    principle1_title:"Ghi nhận sự cải thiện",principle1_desc:"Một lần vượt qua kỷ lục cá nhân hay khắc phục phần kiến thức còn yếu đôi khi ý nghĩa hơn điểm tuyệt đối. Mỗi trẻ có hành trình riêng.",principle1_tag:"Tiến bộ, không so bì",
    principle2_title:"Giữ lại những gì đã đạt",principle2_desc:"XP đại diện cho hành trình học tập. Một ngày khó khăn không nên xóa đi những nỗ lực trước đó.",principle2_tag:"Không phạt khi vấp ngã",
    principle3_title:"Để gia đình cùng quyết định",principle3_desc:"Phụ huynh đặt giới hạn và phần thưởng hợp lý. Trẻ được tham gia chọn mục tiêu mình thực sự quan tâm.",principle3_tag:"Tự chủ trong giới hạn",
    child_title:"Dành cho những nhà thám hiểm nhỏ",child_desc:"Một con đường rõ ràng hơn từ “mình đã cố gắng” đến “mình tiến bộ rồi”. Thêm tự tin, chủ động và mục tiêu đáng theo đuổi.",
    parent_title:"Dành cho cha mẹ và người chăm sóc",parent_desc:"Một cách tích cực để ghi nhận nỗ lực thật, thống nhất phần thưởng và đồng hành mà không biến mỗi buổi học thành cuộc tranh luận.",
    story_art_label:"Hai đứa em trai. Một câu hỏi lớn.",
    story_kicker:"ĐIỂM KHỞI ĐẦU",story_title:"Ý tưởng này bắt đầu từ gia đình, không phải phòng họp.",
    story_p1:"Tôi có hai đứa em trai. Như nhiều gia đình khác, bố mẹ tôi rất quan tâm đến việc học của các em, nhưng không phải lúc nào cũng đủ thời gian và điều kiện để ngồi cạnh, theo sát từng buổi học và bài tập.",
    story_p2:"Tôi cứ nghĩ mãi: nếu việc học mang lại cảm giác tiến bộ rõ ràng như những trò chơi mà các em đã quen thì sao? Không phải để biến điểm số thành phần quà, mà để những nỗ lực giữa hai lần kiểm tra cũng được nhìn thấy.",
    story_p3:"Câu hỏi ấy trở thành LearnWard — một ý tưởng biến việc học hằng ngày thành những nhiệm vụ, làm rõ sự tiến bộ và để trẻ cùng phụ huynh thống nhất những phần thưởng thực sự có ý nghĩa.",
    story_signoff:"Bắt đầu từ vấn đề thật của gia đình, dành cho những gia đình giống chúng tôi.",
    faq_kicker:"GIẢI ĐÁP THẮC MẮC",faq_title:"Bạn muốn biết thêm?",faq_intro:"Có vài điều chúng tôi muốn gia đình hiểu rõ ngay từ đầu.",
    faq_q1:"LearnWard có phải nền tảng dạy học mới?",faq_a1:"Không. LearnWard được hình dung như lớp tạo động lực đặt trên những hoạt động học trẻ đã làm ở trường, ở nhà hay nơi khác, giúp các em nhận ra sự tiến bộ.",
    faq_q2:"Chỉ được thưởng khi đạt điểm cao?",faq_a2:"Không. Thiết kế coi trọng sự cải thiện, nỗ lực có ý nghĩa, khả năng khắc phục sai sót và làm chủ kiến thức bên cạnh thành tích. Kết quả chưa tốt là cơ hội học tiếp, không phải lý do tước đi tiến bộ đã đạt.",
    faq_q3:"Ai quyết định phần thưởng?",faq_a3:"Gia đình cùng quyết định. Phụ huynh xác định phần thưởng phù hợp, mức điểm và giới hạn; trẻ có thể tham gia đặt mục tiêu và chọn điều muốn tích lũy. Ví dụ ở đây chỉ mang tính minh họa.",
    faq_q4:"Hiện có thể tải LearnWard chưa?",faq_a4:"Chưa. LearnWard đang được phát triển cho Android và iOS. Website này giới thiệu định hướng sản phẩm; các hình minh họa không phải ảnh chụp từ ứng dụng đã phát hành.",
    faq_q5:"Website có thu thập dữ liệu học tập của trẻ không?",faq_a5:"Không. Website giới thiệu này không có hệ thống tài khoản, biểu mẫu thu thập dữ liệu học tập hay mã phân tích truy cập. Website chỉ lưu lựa chọn ngôn ngữ trên trình duyệt. Ứng dụng trong tương lai sẽ có thông tin quyền riêng tư riêng trước khi ra mắt.",
    cta_kicker:"HÀNH TRÌNH CHỈ VỪA BẮT ĐẦU",cta_title:"Mỗi bước nhỏ đều xứng đáng được nhìn nhận.",cta_desc:"Chúng tôi đang xây dựng LearnWard một cách cẩn trọng, từ từng cột mốc học tập. Hãy theo dõi dự án hoặc liên hệ với chúng tôi.",
    cta_email:"Liên hệ LearnWard",cta_story:"Đọc câu chuyện của chúng tôi",
    cta_note:"Dự án độc lập · Dự kiến Android & iOS · Chưa phát hành",
    footer_tag:"Giúp mỗi đứa trẻ nhìn thấy mình đã đi xa đến đâu.",footer_how:"Cách hoạt động",footer_story:"Câu chuyện",footer_rights:"Được xây dựng bằng sự quan tâm dành cho gia đình.",footer_disclaimer:"Ý tưởng sản phẩm đang phát triển. Giao diện và mức điểm chỉ mang tính minh họa."
  };

  const nodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const english = new Map(nodes.map((node) => [node, node.textContent]));
  const titles = {
    en: "LearnWard — Turn learning into an adventure",
    vi: "LearnWard — Biến việc học thành một hành trình"
  };
  const descriptions = {
    en: "LearnWard turns the learning kids already do into quests, visible growth, XP, levels, and family-agreed rewards. Built to make progress feel meaningful.",
    vi: "LearnWard biến việc học hằng ngày thành nhiệm vụ, sự tiến bộ rõ ràng, XP, cấp độ và phần thưởng do trẻ và phụ huynh cùng thống nhất."
  };
  const socialDescriptions = {
    en: "Real learning. Visible progress. Rewards that mean something to your family. Discover LearnWard, an educational motivation app in development.",
    vi: "Học thật, tiến bộ rõ ràng và phần thưởng ý nghĩa do cả gia đình cùng chọn. Tìm hiểu LearnWard — ứng dụng tạo động lực học tập đang phát triển."
  };

  function applyLanguage(lang) {
    const isVietnamese = lang === "vi";
    nodes.forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = isVietnamese && Object.hasOwn(vietnamese,key) ? vietnamese[key] : english.get(node);
    });
    document.documentElement.lang = isVietnamese ? "vi" : "en";
    document.title = titles[lang];
    const meta = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (meta) meta.content = descriptions[lang];
    if (ogTitle) ogTitle.content = titles[lang];
    if (ogDescription) ogDescription.content = socialDescriptions[lang];
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === lang));
    });
    const languageGroup = document.getElementById("language-switch");
    if (languageGroup) languageGroup.setAttribute("aria-label", isVietnamese ? "Chọn ngôn ngữ" : "Select language");
    const navigation = document.getElementById("main-nav");
    if (navigation) navigation.setAttribute("aria-label", isVietnamese ? "Điều hướng chính" : "Primary navigation");
    const brand = document.getElementById("brand-link");
    if (brand) brand.setAttribute("aria-label", isVietnamese ? "LearnWard — Trang chủ" : "LearnWard — Home");
    const heroArt = document.getElementById("hero-art");
    if (heroArt) heroArt.setAttribute("aria-label", isVietnamese ? "Minh họa bảng tiến độ học tập LearnWard" : "Illustration of an example LearnWard learning dashboard");
    updateMenuLabel();
    try { localStorage.setItem("learnward-language",lang); } catch (_) { /* storage can be disabled */ }
  }
  const menu = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  function updateMenuLabel() {
    if (!menu) return;
    const isOpen = menu.getAttribute("aria-expanded") === "true";
    const isVietnamese = document.documentElement.lang === "vi";
    menu.setAttribute("aria-label", isVietnamese ? (isOpen ? "Đóng menu" : "Mở menu") : (isOpen ? "Close navigation menu" : "Open navigation menu"));
  }
  function closeMenu() {
    if (!menu || !nav) return;
    nav.classList.remove("is-open");
    menu.setAttribute("aria-expanded","false");
    updateMenuLabel();
  }
  if (menu && nav) {
    menu.addEventListener("click",() => {
      const open = menu.getAttribute("aria-expanded") !== "true";
      nav.classList.toggle("is-open",open);
      menu.setAttribute("aria-expanded",String(open));
      updateMenuLabel();
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click",closeMenu));
    document.addEventListener("keydown",(event) => {
      if (event.key === "Escape") closeMenu();
    });
    document.addEventListener("click",(event) => {
      if (menu.getAttribute("aria-expanded") === "true" && !menu.contains(event.target) && !nav.contains(event.target)) closeMenu();
    });
  }
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click",() => applyLanguage(button.dataset.language));
  });
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
  let saved = "en";
  try { if (localStorage.getItem("learnward-language") === "vi") saved = "vi"; } catch (_) { /* storage can be disabled */ }
  applyLanguage(saved);
})();