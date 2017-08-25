class Api::CertificationsController < ApplicationController
  def index
    @certifications = Certification.all
  end
end
