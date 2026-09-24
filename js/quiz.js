/**
 * =========================================================================
 * 🧪 CHEMISTRY QUIZ ENGINE - INTERACTIVE EVALUATION & SCORING SYSTEM
 * =========================================================================
 */

class ChemistryQuiz {
  constructor(data) {
    this.questions = data.quizQuestions || [];
    this.currentIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.score = 0;
    this.isSubmitted = false;

    this.container = document.getElementById("quiz-engine-root");
    this.init();
  }

  init() {
    if (!this.container || this.questions.length === 0) return;
    this.renderQuestion();
  }

  renderQuestion() {
    const q = this.questions[this.currentIndex];
    const total = this.questions.length;
    const progressPercent = Math.round(((this.currentIndex) / total) * 100);

    const answered = this.userAnswers[this.currentIndex] !== null;
    const selectedIdx = this.userAnswers[this.currentIndex];

    this.container.innerHTML = `
      <div class="quiz-header-bar">
        <div class="quiz-progress-text">Question ${this.currentIndex + 1} of ${total}</div>
        <div class="quiz-score-badge">Topic: ${q.topic}</div>
      </div>
      <div class="quiz-progress-track">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <span class="quiz-topic-badge">${q.type === 'tf' ? 'True / False' : 'Multiple Choice'}</span>
      <h3 class="quiz-question-title">${q.question}</h3>

      <div class="quiz-options-list" id="quiz-options-box">
        ${q.options.map((opt, idx) => {
          let btnClass = "quiz-option-btn";
          if (answered) {
            if (idx === q.correctIndex) btnClass += " correct";
            else if (idx === selectedIdx) btnClass += " incorrect";
          }
          return `
            <button class="${btnClass}" data-index="${idx}" ${answered ? 'disabled' : ''}>
              <span><strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}</span>
              ${answered && idx === q.correctIndex ? '<span>✓</span>' : ''}
              ${answered && idx === selectedIdx && idx !== q.correctIndex ? '<span>✗</span>' : ''}
            </button>
          `;
        }).join('')}
      </div>

      <div class="quiz-feedback-box ${answered ? (selectedIdx === q.correctIndex ? 'correct' : 'incorrect') : ''}" 
           style="display: ${answered ? 'block' : 'none'};">
        <strong>${selectedIdx === q.correctIndex ? '✓ Correct Answer!' : '✗ Explanation:'}</strong>
        <p style="margin-top: 6px; font-size: 0.9375rem;">${q.explanation}</p>
      </div>

      <div class="quiz-actions-row">
        ${answered ? `
          ${this.currentIndex < total - 1 ? `
            <button class="btn btn-primary" id="quiz-next-btn">Next Question →</button>
          ` : `
            <button class="btn btn-primary" id="quiz-finish-btn">View Final Results 🏆</button>
          `}
        ` : ''}
      </div>
    `;

    // Bind option selection
    const optionBtns = this.container.querySelectorAll(".quiz-option-btn");
    optionBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        this.selectAnswer(idx);
      });
    });

    const nextBtn = document.getElementById("quiz-next-btn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        this.currentIndex++;
        this.renderQuestion();
      });
    }

    const finishBtn = document.getElementById("quiz-finish-btn");
    if (finishBtn) {
      finishBtn.addEventListener("click", () => {
        this.showResults();
      });
    }
  }

  selectAnswer(index) {
    if (this.userAnswers[this.currentIndex] !== null) return;
    this.userAnswers[this.currentIndex] = index;

    if (index === this.questions[this.currentIndex].correctIndex) {
      this.score++;
    }

    this.renderQuestion();
  }

  showResults() {
    const total = this.questions.length;
    const percentage = Math.round((this.score / total) * 100);

    let message = "";
    let subMessage = "";

    if (percentage >= 90) {
      message = "“Excellent! You have mastered the experiment! 🧪”";
      subMessage = "Outstanding performance! You possess an advanced understanding of surfactant chemistry, builders, and liquid detergent preparation.";
    } else if (percentage >= 70) {
      message = "“Great work! You understand the experiment very well.”";
      subMessage = "Commendable score! You clearly understand the core chemical concepts and laboratory procedures.";
    } else if (percentage >= 50) {
      message = "“Good attempt! Review the experiment once more.”";
      subMessage = "You have grasped basic ideas, but revisiting the chemical ingredients and surfactant mechanisms will boost your mastery.";
    } else {
      message = "“Keep learning! Explore the other sections and try the quiz again.”";
      subMessage = "Chemistry is a journey of discovery. Go through Tab 2 (Ingredients) and Tab 3 (Process) to reinforce your knowledge.";
    }

    this.container.innerHTML = `
      <div class="quiz-results-card">
        <div class="quiz-score-circle">
          <span class="quiz-score-num">${this.score}/${total}</span>
          <span class="quiz-score-percent">${percentage}%</span>
        </div>

        <h3 class="quiz-result-msg">${message}</h3>
        <p class="quiz-result-sub">${subMessage}</p>

        <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" id="quiz-retry-btn">↺ Try Again</button>
          <button class="btn btn-secondary" id="quiz-review-toggle-btn">📋 Review All Answers</button>
        </div>

        <div class="quiz-review-section" id="quiz-review-list" style="display: none;">
          <h4 style="margin-bottom: 20px;">Detailed Answers Review</h4>
          ${this.questions.map((q, idx) => {
            const userAns = this.userAnswers[idx];
            const isCorrect = userAns === q.correctIndex;
            return `
              <div style="margin-bottom: 20px; padding: 16px; background-color: var(--bg-secondary); border-radius: var(--radius-md); border-left: 4px solid ${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">
                <p style="font-weight: 700; margin-bottom: 6px;">Q${idx + 1}: ${q.question}</p>
                <p style="font-size: 0.875rem; color: ${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; font-weight: 600;">
                  Your answer: ${userAns !== null ? q.options[userAns] : 'Not Answered'} ${isCorrect ? '✓' : '✗'}
                </p>
                ${!isCorrect ? `<p style="font-size: 0.875rem; color: var(--accent-cyan); font-weight: 600;">Correct answer: ${q.options[q.correctIndex]}</p>` : ''}
                <p style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 6px;">${q.explanation}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    document.getElementById("quiz-retry-btn").addEventListener("click", () => {
      this.currentIndex = 0;
      this.score = 0;
      this.userAnswers = new Array(this.questions.length).fill(null);
      this.renderQuestion();
    });

    const toggleBtn = document.getElementById("quiz-review-toggle-btn");
    const reviewList = document.getElementById("quiz-review-list");
    toggleBtn.addEventListener("click", () => {
      if (reviewList.style.display === "none") {
        reviewList.style.display = "block";
        toggleBtn.textContent = "▲ Hide Review";
      } else {
        reviewList.style.display = "none";
        toggleBtn.textContent = "📋 Review All Answers";
      }
    });
  }
}

window.ChemistryQuiz = ChemistryQuiz;
