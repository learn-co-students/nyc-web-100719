require_relative '../lib/palindrome_check'

RSpec.describe PalindromeCheck do 
  describe '#check' do 
    let(:checker) { PalindromeCheck.new }
    
    it 'returns true when given a palidrome' do
      string = 'racecar'

      result = checker.check(string)

      expect(result).to be true
    end

    it 'returns true when given a palidrome... again' do
      string = 'panamanap'

      result = checker.check(string)

      expect(result).to be true
    end

    it 'returns true when given a mixed-case palindrome' do 
      string = 'Tacocat'

      result = checker.check(string)

      expect(result).to be true
    end

    it 'returns true when give a palindromic phrase with whitespace' do 
      string = 'never odd or even'

      result = checker.check(string)

      expect(result).to be true
    end

    xit 'returns true when given a palindrome with punctuation'
    xit 'returns true when given a palindrome with both caplitals and spaces'

    it 'returns false when not given a palindrome' do
      string = 'not_a_palindrome'

      result = checker.check(string)

      expect(result).to be false
    end


  end
end